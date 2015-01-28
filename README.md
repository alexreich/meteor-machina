# machina
Meteor package for [machina.js] [Finite State Machine] (FSM), client &amp; server

##Background:
A Finite State Machine is a computational abstraction that:
  - Has a finite number of states in which it can exist
  - Can only be in one state at any time
  - Accepts input
  - Can produce output determined by state &/or input
  - Can transition from one state to another

''Source: “Taming Complexity In JavaScript With Machina.js” by Jim Cowart''

##Usage:
The global namespace 'machina' is available in both client &amp; server contexts:

##Example Template:
    <template name="connection_tpl">
      <div id="connection-div" class="col-sm-12 alert alert-success">
            <div><label>Connection Status:&nbsp;</label>{{connection_status}}</div>
      </div>
    </template>

##Example View:
    var Div_Connection = $(this.find("#connection-div"));

    var onlineFsm = new machina.Fsm({
        initialState: "online",
        states : {
            online : {
                   _onEnter: function() {
                        Div_Connection.removeClass('alert-danger').addClass('alert-success');
                    },			
            },
            offline : {
                   _onEnter: function() {			           	
                        Div_Connection.removeClass('alert-success').addClass('alert-danger');
                    },
            },
        },
    });

#See Also:
http://code.dougneiner.com/presentations/machina

[machina.js]:http://machina-js.org/
[Finite State Machine]:http://en.wikipedia.org/wiki/Finite-state_machine
