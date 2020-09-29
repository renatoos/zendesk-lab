require 'faker'
require 'securerandom'
require "csv"

output = ""
$i = 0
$num = 50000
csvSeparator = "|"

CSV.open("filew.csv", "wb") do |csv|  
    begin
        name = Faker::Name.name
        email = Faker::Internet.safe_email(name: name)

        output <<  SecureRandom.uuid << csvSeparator << name << csvSeparator << email << csvSeparator << Faker::Address.street_address << csvSeparator << Faker::Address.zip_code << csvSeparator << Faker::Address.city << csvSeparator << Faker::Address.state << csvSeparator << Faker::Address.country << csvSeparator <<  Faker::Address.latitude.to_s << csvSeparator << Faker::Address.longitude.to_s << ''
        

            csv << [output] 
        #puts output

    output = ""
    $i +=1
    end while $i < $num
end


class User

    @@no_users = 0
    
    def initialize (id , name, address)
        @usr_id = id
        @usr_name = name
        @usr_address = address
    end

    def show
        puts "User ID: #{@usr_id} "

    end

    def total_no_users
        @@no_users += 1
        puts "Total number of users: #@@no_users"
     end
end