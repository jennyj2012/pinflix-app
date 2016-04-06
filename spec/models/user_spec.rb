require 'rails_helper'

RSpec.describe User, :type => :model do
  subject(:user) { build(:user) }
  it 'is valid when required attributes are present' do
    expect(user).to be_valid
  end

  context 'is invalid' do
    let(:invalid_user) { build(:user, username: '', password: 'test') }

    specify 'when username is blank' do
      expect(invalid_user).not_to be_valid
    end

    specify 'when password is less than 6 characters' do
      expect(invalid_user).not_to be_valid
    end
  end

  context "returns expected error for required field" do
    errored_user = User.new(password: 'test')
    errored_user.valid?

    specify 'when username is blank' do
      expect(errored_user.errors[:username]).to include("can't be blank")
    end

    specify 'when password is too short' do
      expect(errored_user.errors[:password]).to include("is too short (minimum is 6 characters)")
    end

  end

end
