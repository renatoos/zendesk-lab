require 'sinatra'
require 'jwt'

PUBLIC_DIR = File.join(File.dirname(__FILE__), '/')
set :public_folder, PUBLIC_DIR

get '/' do
  redirect to('index.html')
end

get '/support' do
  redirect to('support.html')
end

get '/sunco/jwt' do

  content_type 'application/json'

  email = 'jane.doe@example.com'
  name = 'Jane Doe'
  user_id = 'AB1234'

  # AW
  api_key = 'app_5f46e8d94d9d84000caa8c5b'
  secret = '4rIRk-D9L1sfUxaoZifbjjCv3OPzSxR_zc4wqvA27DZ1w3Y_Ci7HVB8Pph1IudIdCzart7I7L0Kq85_iiL2TvA'

  # Legacy
  # api_key = 'app_5ec56b92a93cea000f1612b6'
  # secret = '1NfhVW5byvlXXrv_NX0Gn0KiVLuja2_w0yzgzDSmS9OcP414xhaZdeUj_meVHR56jKIdBrRMfwqep2Ilpc417w'

  generate_jwt_sunco(name, email, user_id, secret, api_key)
end

def generate_jwt_sunco(name, email, user_id, secret, api_key)
  jwt_header = { kid: api_key, typ: 'JWT' }
  jwt_payload = { iat: Time.now.to_i, scope: 'appUser', userId: user_id, name: name, email: email }
  jwt = JWT.encode(jwt_payload, secret, algorithm = 'HS256', jwt_header)
  result = { token: jwt }

  JSON[result]
end
