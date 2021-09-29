class ApplicationController < ActionController::Base
      skip_before_action :verify_authenticity_token

      def is_authorized
            render json: {error: "You are not logged in"} unless is_logged_in
      end

      def is_logged_in
            !!current_user
      end

      def current_user 
            authorization_header = request.headers[:Authorization]
            if authorization_header
                  user_token = authorization_header.split(" ")[1]
                  begin
                        @user_id = JWT.decode(user_token, Rails.application.secrets.secret_key_base[0])[0]["user_id"]
                  rescue JWT::DecodeError
                        nil
                  end
            end
      end
end
