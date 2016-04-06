require 'rails_helper'

RSpec.describe Board, :type => :model do
  let(:author) { build(:user) }
  subject(:board) { build(:board, author: author) }

  it 'is valid when required attributes are present' do
    expect(subject).to be_valid
  end

  # context 'is invalid' do
  #   specify 'when username is blank' do
  #     expect(build(:user, username: '')).not_to be_valid
  #   end
  #   specify 'when password is less than 6 characters' do
  #     expect(build(:user, password: 'test')).not_to be_valid
  #   end
  # end

end
