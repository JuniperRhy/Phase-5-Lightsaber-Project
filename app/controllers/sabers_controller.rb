class SabersController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create, :destroy, :update]

    def index
        sabers = Saber.all
        render json: sabers.as_json(include: [:segments, :saber_segments, :users]), status: :ok 
    end

    def show
        saber = find_saber
        render json: saber.as_json(include: :segments), status: :ok
    end

    def create 
        saber = Saber.create(saber_params)
        render json: saber.as_json(include: [:segments, :saber_segments, :users]), status: :created
    end

    def destroy
        # byebug
        saber = find_saber
        saber.users.delete(*saber_params[:user_ids])
        render json: saber
    end

    def update
        # byebug
        saber = find_saber
        segments = saber.segments

        emitter = segments.find_by(segment_type: 'Emitter')
        emitter_join = SaberSegment.find_by(saber_id: saber[:id], segment_id: emitter[:id])
        emitter_join.update(hilt_color: update_params[:emitter_color])

        grip = segments.find_by(segment_type: 'Grip')
        grip_join = SaberSegment.find_by(saber_id: saber[:id], segment_id: grip[:id])
        grip_join.update(hilt_color: update_params[:grip_color])

        switch = segments.find_by(segment_type: 'Switch')
        switch_join = SaberSegment.find_by(saber_id: saber[:id], segment_id: switch[:id])
        switch_join.update(hilt_color: update_params[:switch_color])

        saber.update(blade_color: update_params[:blade_color])

        render json: saber.as_json(include: [:segments, :saber_segments, :users]), status: :ok 
    end


        private

    def update_params
        params.require(:saber).permit(:blade_color, :emitter_color, :grip_color, :switch_color)
    end

    def saber_params
        params.require(:saber).permit(:id, :name, :hilt_color, :blade_color, user_ids:[], segment_ids: [])
    end

    def find_saber
        Saber.find(params[:id])
    end

end
