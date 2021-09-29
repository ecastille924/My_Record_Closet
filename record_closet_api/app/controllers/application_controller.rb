class ApplicationController < ActionController::Base
      skip_before_action :verify_authenticity_token

      def is_authorized
            render json: {error: "You are not logged in"} unless is_logged_in
      end

      def is_logged_in
            !!current_user
      end

      def current_user = request.headers[:Authorization]
end
