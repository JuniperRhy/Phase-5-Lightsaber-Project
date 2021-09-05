class UsersController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorize, only: [:create, :show]

      def index
        users = User.all 
        render json: users.as_json(include: { sabers: {include: :segments }}), status: :ok 
    end

    def show
      # byebug
      print 1
        user = User.find_by(id: session[:user_id])
        if user 
          print 2
          render json: user
        else
          print 3
          render json: {}
          
        end        
    end

    def create 
        user = User.create(user_params)
        render json: user, status: :created
    end

    def login 
      user = User.find(username:user_params[:username])
      if (user && user.is_authenticate(user_params[:password]))
        render json: user
      else
        render json: {error: ['invalid username and/or password']}
      end
    end

    private

    def user_params
        params.permit(:name, :username, :email, :password)
    end

    # def find_user
    #     User.find(params[:id])
    # end

    def render_not_found_response
        render json: { error: user.errors.full_messages }, status: :not_found 
    end

end
