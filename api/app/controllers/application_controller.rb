class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
   before_action :authorize_request

  # Redirect users to appropriate root path after sign-in
  def after_sign_in_path_for(resource)
    if resource.student?
      student_root_path
    elsif resource.admin?
      admin_root_path
    else
      super
    end
  end

  private

  def authorize_request
    # Extract JWT token from request header
    header = request.headers['Authorization']
    header = header.split(' ').last if header

    begin
      # Decode JWT token and find user from token payload
      decoded = JWT.decode(header, Rails.application.secrets.secret_key_base, true, algorithm: 'HS256')
      @current_user_id = decoded[0]['user_id']
      @current_user = User.find(@current_user_id)
    rescue JWT::DecodeError
      # Handle errors when JWT token is invalid
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end
end
