require 'faker'
require 'securerandom'
require "csv"

output = ""
$i = 0
$num = 50
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


#LOOPS
["apple ", "orange", "grape" ].each do |fruit|
    puts fruit
end

["apple ", "orange", "grape" ].each { |fruit| puts fruit }

10.upto(100) { |i| puts i}

# BREAK, NEXT, REDO
["apple ", "orange", "grape" ].each do |fruit|
    puts fruit
    break if fruit == "apple"
end

["apple ", "orange", "grape" ].each do |fruit|
    next if fruit == "apple"
    puts fruit
end

loop do
    puts "Type a number from 0 to 10: "
    input = gets.to_i    
    redo if input > 10
    break
end


# Exceptions
def division (a,b)
    raise "Can not divide by Zero" if b == 0
    a/b
end

#Block to handle the exception
begin
    result = division 10, 0
    puts result
rescue Exception => e
    puts "Error: " + e.message
else
    puts "If no errors, this line is executed"
ensure
    puts "This line always is executed"
end

name = ""
puts name.methods


#ARRAYS
list = [12,3,166,98,1113,23,66]

list.each{|i| puts i}
list.sort
list.reduce(0) { |result, nextvalue| result + nextvalue }
list.map{ |number| number * number }


#HASH
hash = {:name => "Renato", :age => 39, 10 => 100 }
hash.map{ |ite| }

#RANGE
range = 1..10
range.include?(3)
range.each{|i| puts i}
range.map{ |num| puts num * 10}

entrada = gets.to_i
case entrada
when 1..2 then puts("Range 1 to 2")
when 2..5 then puts("Range 2 to 5")
else puts "Other ranges"
end