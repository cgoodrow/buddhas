class ApplicationMailer < ActionMailer::Base
  default from: 'from@example.com'
  layout 'mailer'

  def contact(params)
    @params = params

    opts = {}

    opts[:subject] = "Contact Submission"

    if Rails.env.production?
      opts[:to] = ENV["CONTACT_LEAD"] || 'goodrow.chris4@gmail.com'
    elsif Rails.env.staging?
      opts[:to] = "goodrow.chris4@gmail.com"
    elsif Rails.env.development?
      opts[:to] = "goodrow.chris4@gmail.com"
    else
      opts[:to] = ENV['SMTP_DEFAULT_TO_ADDRESS']
    end

    mail(opts)
  end
end
