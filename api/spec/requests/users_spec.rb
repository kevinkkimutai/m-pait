require 'rails_helper'

RSpec.describe "Users", type: :request do

    # describe 'POST #create' do
    #   context 'when valid user attributes are provided' do
    #     let(:valid_user_attributes) { attributes_for(:user) }
  
    #     before { post :create, params: valid_user_attributes }
  
    #     it 'returns http status created' do
    #       expect(response).to have_http_status(:created)
    #     end
  
    #     it 'returns the user and token in the response' do
    #       expect(JSON.parse(response.body)['user']['email']).to eq(valid_user_attributes[:email])
    #       expect(JSON.parse(response.body)['user']['fullname']).to eq(valid_user_attributes[:fullname])
    #       expect(JSON.parse(response.body)['token']).not_to be_nil
    #     end
    #   end
  
    #   context 'when invalid user attributes are provided' do
    #     let(:invalid_user_attributes) { attributes_for(:user, email: nil) }
  
    #     before { post :create, params: invalid_user_attributes }
  
    #     it 'returns http status unprocessable_entity' do
    #       expect(response).to have_http_status(:unprocessable_entity)
    #     end
  
    #     it 'returns error messages in the response' do
    #       expect(JSON.parse(response.body)['errors']).not_to be_empty
    #     end
    #   end
    # end
  
    # describe 'POST #reset_password' do
    #   context 'when email exists in the database' do
    #     let(:user) { create(:user) }
  
    #     before { post :reset_password, params: { email: user.email } }
  
    #     it 'returns http status ok' do
    #       expect(response).to have_http_status(:ok)
    #     end
  
    #     it 'generates a reset password token and returns it in the response' do
    #       expect(user.reload.reset_password_token).not_to be_nil
    #       expect(JSON.parse(response.body)['reset_password_token']).to eq(user.reset_password_token)
    #     end
    #   end
  
    #   context 'when email does not exist in the database' do
    #     before { post :reset_password, params: { email: 'nonexistent@example.com' } }
  
    #     it 'returns http status not_found' do
    #       expect(response).to have_http_status(:not_found)
    #     end
  
    #     it 'returns an error message in the response' do
    #       expect(JSON.parse(response.body)['error']).to eq('User not found')
    #     end
    #   end
    # end
  
   
        
end