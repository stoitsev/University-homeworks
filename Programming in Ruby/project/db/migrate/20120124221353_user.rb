class User < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.database_authenticatable
      t.confirmable
      t.recoverable
      t.rememberable
      t.trackable
      t.timestamps
    end
  end

  def down
    drop_table :users
  end
end
