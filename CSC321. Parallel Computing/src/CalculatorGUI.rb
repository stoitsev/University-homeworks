include Java

require 'pp'

import javax.swing.JFrame
import javax.swing.JButton
import javax.swing.JFileChooser
import javax.swing.JLabel
import javax.swing.BoxLayout
import javax.swing.Box
import java.awt.Dimension
import java.lang.System

class CalculatorGUI

  def initialize(calculator)
    @calculator = calculator
  end

  def show
    frame = JFrame.new("Threaded Calculator")
    button = JButton.new("Select File")
    file_chooser = JFileChooser.new("JRuby panel")
    file_chooser.set_dialog_title("the title")

    button.add_action_listener do |evt|
      success = file_chooser.show_open_dialog(nil)
      if success == JFileChooser::APPROVE_OPTION
        @calculator.input_file = file_chooser.get_selected_file.get_absolute_path
        @calculator.solve
        System.exit 0
      else
        $stderr.puts 'Error getting the file path'
      end
    end

    title = JLabel.new()
    title.setText "<html><font size=6><center>Threaded Calculator</center></font></html>"
    title.setHorizontalTextPosition JLabel::CENTER

    content_pane = frame.get_content_pane
    content_pane.add title
    content_pane.add Box.createRigidArea Dimension.new 0, 150
    content_pane.add button
    content_pane.setLayout BoxLayout.new(content_pane, BoxLayout::Y_AXIS)
    content_pane.setAlignmentX 1.0

    frame.set_default_close_operation(JFrame::EXIT_ON_CLOSE)
    frame.setSize 300, 400
    frame.setLocationByPlatform true
    frame.visible = true
  end

end