require 'test_helper'

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get the_experience" do
    get welcome_the_experience_url
    assert_response :success
  end

end
