// <![CDATA[
// <![CDATA[
//
// LIBRARY REQUIREMENTS
//
// In the require function, we include the necessary libraries and modules for
// the HTML dashboard. Then, we pass variable names for these libraries and
// modules as function parameters, in order.
// 
// When you add libraries or modules, remember to retain this mapping order
// between the library or module and its function parameter. You can do this by
// adding to the end of these lists, as shown in the commented examples below.

require([
    "splunkjs/ready!",
    "splunkjs/mvc"
    ],
    function(mvc) {
        var service = mvc.createService();

        function pop_dropdown(id){
            var el_id = id;
            var select_el = mvc.Components.get(id);

            var values = [];

            var select_search = mvc.Components.get(id+"_search");
            var select_search_results = select_search.data("preview");

            select_search_results.on("data", function(){
                $.each(select_search_results.data().rows, function(index, value){
                    if(id == "cc"){
                        values.push(value[1]);
                    } else {
                        values.push(value[0]);
                    }
                });
                select_el.val(values[values.length - 1]);
            });
            
        }
        // Iterate through all multiselects
        $('.input-multiselect').each(function(){
            pop_dropdown(this.id);
        });
    }
);
// ]]>
