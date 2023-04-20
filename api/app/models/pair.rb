class Pair < ApplicationRecord
    belongs_to :student1, class_name: 'User', foreign_key: 'student1_user_id'
  belongs_to :student2, class_name: 'User', foreign_key: 'student2_user_id'
end
