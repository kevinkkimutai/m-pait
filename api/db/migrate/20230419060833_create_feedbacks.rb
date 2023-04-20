class CreateFeedbacks < ActiveRecord::Migration[7.0]
  def change
    create_table :feedbacks do |t|
      t.integer :pair_id
      t.integer :instructor_id
      t.string :comment

      t.timestamps
    end
  end
end
