class User < ApplicationRecord

    def sefl.create_from_omniauth(auth)
        where(email: auth.info.email).first_or_initialize do |u|
            u.username = auth.info.username
            u.email = auth.info.email
            u.uid = auth.uid
        end
    end
end