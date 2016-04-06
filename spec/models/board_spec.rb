require 'rails_helper'

RSpec.describe Board, :type => :model do
  let(:author) { build(:user) }
  subject(:board) { build(:board, author: author) }

  it 'is valid when required attributes are present' do
    expect(subject).to be_valid
  end

end
