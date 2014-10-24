class CreateInnovators < ActiveRecord::Migration
  def change
    create_table :innovators do |t|
    	t.string :last_name

      t.timestamps
    end
  end
end
