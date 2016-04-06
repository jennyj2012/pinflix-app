FactoryGirl.define do
  factory :board do
    title "Favorites"
    author {}
    description "Favorite Movies"
    pins = sequence :pin do |pin_title|
      build(:pins, title: "#{pin_title}")
    end
  end
end
