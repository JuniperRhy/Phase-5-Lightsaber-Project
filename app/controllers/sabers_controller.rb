class SabersController < ApplicationController

      def index
        sabers = Saber.all
        render json: sabers.as_json(include: :segments), status: :ok 
    end

    def show
        saber = find_saber
        render json: saber.as_json(include: :segments), status: :ok
    end

    def create 
        saber = Saber.create(saber_params)
        render json: saber.as_json(include: :segments), status: :created
    end


        private

    def saber_params
        params.permit(:name, :hilt_color, :blade_color)
    end

    def find_saber
        Saber.find(params[:id])
    end

end
