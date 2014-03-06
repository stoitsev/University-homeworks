require 'opencv'

module FaceRecognition
  include OpenCV

  def self.analyze file_name
    num_of_faces = 0
    image = CvMat.load(file_name)
    
    eyes = FaceRecognition.detect_eyes image

    data = './data/haarcascades/haarcascade_frontalface_alt2.xml'
    detector = CvHaarClassifierCascade::load(data)
    detector.detect_objects(image).each do |region|
      eyes_inside = eyes.count { |eye| 
        region.top_left.x < eye.top_left.x && region.top_left.y < eye.top_left.y && \
        region.bottom_right.x > eye.bottom_right.x && region.bottom_right.y > eye.bottom_right.y 
      }
      if eyes_inside == 2
        num_of_faces += 1
        #color = CvColor::Green
      else
        #color = CvColor::Blue
      end
    end
    #FOR TESTING
    #image.rectangle! region.top_left, region.bottom_right, :color => color, :thickness => 5
    #name = (0...8).map { (65 + rand(26)).chr }.join
    #image.save_image("./images/output/#{name}.jpg")
    num_of_faces
  end

  private

  def self.detect_eyes image
    data = './data/haarcascades/haarcascade_eye_tree_eyeglasses.xml'
    detector = CvHaarClassifierCascade::load(data)
    eyes = []
    detector.detect_objects(image).each do |region|
      color = CvColor::Red
      eyes << region
      #image.rectangle! region.top_left, region.bottom_right, :color => color
    end
    eyes
  end
end
