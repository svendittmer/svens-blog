---
title: Safely saving records
date: 2016-09-19 18:16 UTC
tags:
  - ruby
  - beginner series
  - rails
  - active record
---
Today I'm starting a series of beginner tutorials for budding (web) developers. I expect the reader to have a basic understanding of the topic. My goal is to provide some best practices that go beyond "Hello World."

This article is about saving records in Ruby on Rails.

Rails provides us several methods for saving our records (the following list contains only the methods that I use most often):

<dl>
  <dt>#save</dt>
  <dd>
    Saves a record (will update an existing record or insert a new one). Returns true on success, false on failure.
  </dd>

  <dt>::create</dt>
  <dd>
    Creates an Object and immediately saves it. Returns the new record on success, false on failure.
  </dd>

  <dt>#update</dt>
  <dd>
    Sets attributes of a record, then saves it. Returns true on success, false on failure.
  </dd>
</dl>

The **::create** method differs from the others: It's a class method and returns an object, but you can use it pretty much like the other methods.

Thought these methods may be convenient to use most of the time, be careful! If you don't check the return value of these methods, you may run into unexpected behavior. Imagine the following code:

```ruby
class Post < ActiveRecord::Base
  validates :title, :content, presence: true
end

def create_post
  Post.create title: "Hello World!"
  puts "I just created a Hello World article for you!"
end
```

If you execute *#create_post*, it will print it's success message, but it won't save the record! The validation has failed, and we didn't notice.
