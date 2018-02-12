module Api
  class AssetsController < ApplicationController

    def show
      render file: "#{Rails.root.join('config', 'assets.json')}",
        content_type: 'application/json',
        layout: false
    end

  end
end
