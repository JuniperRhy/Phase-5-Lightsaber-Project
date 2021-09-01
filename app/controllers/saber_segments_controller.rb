class SaberSegmentsController < ApplicationController
   
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        saber_segments = SaberSegment.all 
        render json: saber_segments, status: :ok 
    end

    def show
        saber_segment = find_saber_segment
        render json: saber_segment, status: :ok
    end

    def create 
        saber_segment = SaberSegment.create(saber_segment_params)
        render json: saber_segment, status: :created
    end

    # def update
    #     saber_segment = find_saber_segment
    #     saber_segment.update(saber_segment_params)
    #     render json: saber_segment, status: :created 
    # end

    def destroy
        saber_segment = find_saber_segment
        saber_segment.destroy
        head :no_content
    end

    private

    def saber_segment_params
        params.permit(:saber_id, :segment_id)
    end

    def find_saber_segment
        SaberSegment.find(params[:id])
    end

    def render_not_found_response
        render json: { error: saber_segment.errors.full_messages }, status: :not_found 
    end
end
