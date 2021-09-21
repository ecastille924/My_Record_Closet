class SessionsController < ApplicationController

def create
    access_token = request.env["omniauth.auth"]
    user = User.create_from_omniauth(access_token)
    user.google_token = access_token.credentials.access_token
    refresh_token = access_token.credentials.refresh_token
    user.google_refresh_token = refresh_token if refresh_token.present?
    user.save!

    cookies.encrypted[current_user_id] = {value: user.id, expires: Time.now + 30.days}

    redirect_to root_path
end

def destroy
    cookies.encrypted[:current_user_id] = nil

    redirect_to root_path
end
