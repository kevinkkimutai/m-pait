class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :sender_user_id
      t.integer :recipient_user_id
      t.string :content
      t.integer :pair_id

      t.timestamps
    end
  end
end
