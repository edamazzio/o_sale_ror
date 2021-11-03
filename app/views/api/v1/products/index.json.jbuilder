# json.products @products
# json.array! @products
json.products @products do |product|
  json.id product.id
  json.name product.name
  json.description product.description
  json.price number_to_currency product.price
  json.quantity product.quantity
  json.imageUrl product.image_url
end
