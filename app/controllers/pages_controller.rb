class PagesController < ApplicationController

  def index

  end

  def show
    render params[:id], layout: 'map'
  end
end
