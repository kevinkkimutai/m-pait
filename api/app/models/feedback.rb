class Feedback < ApplicationRecord
    # Associations
    belongs_to :pair
    belongs_to :instructor

    # Validations
    validates :comment, presence: true
end
