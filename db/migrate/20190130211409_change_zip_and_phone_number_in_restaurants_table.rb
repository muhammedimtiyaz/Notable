class ChangeZipAndPhoneNumberInRestaurantsTable < ActiveRecord::Migration[5.2]
  def change
    change_column :restaurants, :zipcode, :string
    change_column :restaurants, :phone_number, :string
  end
end
