require 'opencv'

module Histogram
  include OpenCV

  def Histogram.analyze file_name
    image = IplImage.load(file_name, 0)

    dim = 1
    sizes = [8]
    ranges = [[0, 255]]
    hist = CvHistogram.new(dim, sizes, CV_HIST_ARRAY, ranges, true).calc_hist!([image])
    arr = []
    0.upto(sizes[0] - 1) do |i|
      arr << hist[i]
    end
    arr
  end
end
