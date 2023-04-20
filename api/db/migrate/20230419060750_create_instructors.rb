class CreateInstructors < ActiveRecord::Migration[7.0]
  def change
    create_table :instructors do |t|
      t.integer :user_id
      t.string :fullname
      t.string :email

      t.timestamps
    end
  end
end
