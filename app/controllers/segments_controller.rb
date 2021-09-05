class SegmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

       def index
        segments = Segment.all
        render json: segments, status: :ok 
    end

    def show
        segment = find_segment
        render json: segment, status: :ok
    end
        private

    # def pedalboard_params
    #     params.permit(:name, :stereo, :price, :pedal_order, :user_id, pedal_ids: [])
    # end

    def find_segment
        Segment.find(params[:id])
    end
end
