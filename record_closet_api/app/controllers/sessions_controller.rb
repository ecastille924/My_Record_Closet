class SessionsController < ApplicationController

def create
    #getting access token from google
    access_token = request.env["omniauth.auth"]
    user = User.create_from_omniauth(access_token)

    #token authenticates rails request to google server
    user.google_token = access_token.credentials.access_token
    
    #access new token if first request
    refresh_token = access_token.credentials.refresh_token
    user.google_refresh_token = refresh_token if refresh_token.present?
    user.save!

    #once new user is created, cookie is generated
    cookies.encrypted[current_user_id] = {value: user.id, expires: Time.now + 30.days}

    redirect_to root_path
end

def destroy
    #delete the cookie to logout the user
    cookies.encrypted[:current_user_id] = nil

    redirect_to root_path
end
