class ChampionsController < ApplicationController
  before_action :authorize

  def index
    champions = current_user.champions
    render json: champions
  end

  def create
    champion = current_user.champions.create(champion_params)
    if champion.valid?
      render json: champion
    else
      render json: { errors: champion.errors.full_messages }, status: :uprocessible_entity
    end
  end

  def show
    champion = current_user.champions.find_by(id: params[:id])
    if champion
      render json: champion
    else
      render json: { error: "Not Found" }, status: :unauthorized
    end
  end

  def destroy
    # binding.pry
     champion = current_user.champions.find_by(id: params[:id])
    if  champion
      champion.destroy
      head :no_content
    else
      render json: { error: "champion Not Found" }, status: :not_found
    end
  end

  def update
    champion = current_user.champions.find_by(id: params[:id])
    if  champion
      champion.update(champion_params)
    else
      render json: {error: "Hero Not Found"}, status: :not_found
    end
  end

  private 

  def current_user
    User.find_by(id: session[:user_id])
  end

  def current_Champion
    Champion.find_by(id: session[:user_id])
  end

  def champion_params
    params.permit(:name, :origin, :category)
  end

  def authorize
    return render json: { errors: "Access Denied" }, status: :unauthorized unless session.include? :user_id
  end
end
