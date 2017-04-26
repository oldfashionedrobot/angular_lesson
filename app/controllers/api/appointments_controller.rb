class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :edit, :update, :destroy]

  # GET /appointments
  def index
    @appointments = Appointment.all

    render json: @appointments.to_json(include: [:user, :doctor])
  end

  # GET /appointments/1
  def show
    render json: @appointment
  end

  # POST /appointments
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment, status: 200
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  # DELETE /appointments/1.json
  def destroy
    @appointment.destroy
    render json: { message: 'Deleted the thing.' }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def appointment_params
    params.require(:appointment).permit(:doctor_id, :user_id, :reason, :date)
  end
end
