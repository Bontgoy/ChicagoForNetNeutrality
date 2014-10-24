class WelcomeController < ApplicationController

	def index
		@innovators = Innovator.all
	end

	def show
		@innovator = Innovator.find(params[:id])
	end

	private

  def innovator_params
    params.require(:innovator).permit(:last_name)
  end
end
