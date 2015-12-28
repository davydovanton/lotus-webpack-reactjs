require 'rubygems'
require 'bundler/setup'
require 'lotus/setup'
require_relative '../lib/lotus-webpack'
require_relative '../apps/web/application'

Lotus::Container.configure do
  mount Web::Application, at: '/'
end
