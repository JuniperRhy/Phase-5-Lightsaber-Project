class UserSabersController < ApplicationController

  def index
        user_sabers = UserSaber.all 
        render json: user_sabers, status: :ok 
    end

    def show
        user_saber = find_usersaber
        render json: user_saber, status: :ok
    end

    def create 
        user_saber = UserSaber.create(user_params)
        render json: user_saber, status: :created
    end

    

    def update
        user_saber = find_usersaber
        user_saber.update(user_params)
        render json: user_saber, status: :created 
    end

    def destroy
        user_saber = find_usersaber
        user_saber.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:name, :username, :email, :password)
    end

    def find_usersaber
        UserSaber.find(params[:id])
    end

    def render_not_found_response
        render json: { error: user.errors.full_messages }, status: :not_found 
    end

end
