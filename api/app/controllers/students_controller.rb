class StudentsController < ApplicationController

    def dashboard
      # Render student dashboard view
    end


     #GET /students
     def index
      students = Student.all
      render json: students, status: :ok
     end
 
     #GET /students/:id
     def show
         #check if the student exits
     student = Student.find_by(id:param[:id])
     
     if student
         #return
         render json: student, status: :ok
     else
         #throw an error
         render json: { error: "Student not found" }, status: :not_found
     end
   end
 
 #POST /students 
    def create
     #create a new student
     student = Student.create(student_params)
 
     #check whether the student is valid
     if student.valid?
         #add the student to the db if he's valid
         render json: student, status: :accepted
     else
         #throw an error
         render json: { error: "An error occured" }, status: :unprocessable_entity
     end
    end
 
    #PUT/PATCH /student/{:id}
    def update
     student = Student.find_by(id.params[:id])
     #if present
     if student
         student.update(student_params)
         render json: student, status: :accepted
     else
         render json: { error: 'Student not found' }, status: :not_found
     end
   end
 
   #DELETE /student/{:id}
   def destroy
     student = Student.find_by(id.params[:id])
     #check iff student exists
     if student
         student.destroy
         head :no_content
     else
         render json: { error: "Student not found" }, status: :not not_found
     end
 end
 
 private
 def student_params
     params.permit(:fullname, :grade, :user_id )
 
 end
    
  end
  