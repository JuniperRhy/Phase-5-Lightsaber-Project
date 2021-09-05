class SabersController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create, :destroy]

    def index
        sabers = Saber.all
        render json: sabers.as_json(include: [:segments, :users]), status: :ok 
    end

    def show
        saber = find_saber
        render json: saber.as_json(include: :segments), status: :ok
    end

    def create 
        saber = Saber.create(saber_params)
        render json: saber.as_json(include: :segments), status: :created
    end

    def destroy
        # byebug
        saber = find_saber
        saber.users.delete(*saber_params[:user_ids])
        render json: saber
    end


        private

    def saber_params
        params.require(:saber).permit(:id, :name, :hilt_color, :blade_color, user_ids:[], segment_ids: [])
    end

    def find_saber
        Saber.find(params[:id])
    end

end
