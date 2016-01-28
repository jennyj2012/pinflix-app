class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token;

  has_many :boards
  has_many :pins
  has_many :comments

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, :username, :email, uniqueness: true

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user.try(:has_password?, password) ? user : nil
  end

  def self.find_by_email(email)
    user = User.find_by_email(email)
    user.nil ? nil : { username: user.username, password: user.password }
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16);
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    if password.present?
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
