import React from 'react';

import Header from "./js/components/Header"
import Body from "./js/components/Body"

export default class App extends React.Component{
  
  constructor(){
    super();
 
    this.sortParticipants = this.sortParticipants.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.deleteParticipant = this.deleteParticipant.bind(this);
    this.state = {participants:this.getParticipantsStub()};
  }

  sortParticipants(key,asc){
        var arr = this.getParticipantsStub();
        arr.sort(function(a, b){
            if(a[key] < b[key]){
                return -1;
            }else if(a[key] > b[key]){
                return 1;
            }
            return 0;
        });
        this.setState({participants:asc ? arr: arr.reverse()});
    }


  addParticipant(fullName, email, phoneNumber){
    var nextState = this.state;
    nextState.participants.push({id:nextState.participants.length+1,fullName:fullName,email:email,phoneNumber:phoneNumber});
    this.setState(nextState);
  };

  deleteParticipant(index) {
    let tempData = this.state.data.slice();
    tempData.splice(index, 1);
    this.setState({
      data: tempData
    })
  };


  render() {
    return(
      <div>
        <Header />
        <Body participants={this.state.participants} addParticipant={this.addParticipant} deleteParticipant={this.deleteItem} sort={this.sortParticipants}/>
      </div>
    );
  }

  getParticipantsStub(){
    return [
          {
            "id": 1,
            "fullName" : "John Alade",
            "email": "topzy20@yahoo.com",
            "phoneNumber": "08065701493"
          },
          {
            "id": 2,
            "fullName" : "Niilo Sevänen",
            "email": "niilo.sevänen@insomnium.net",
            "phoneNumber": "180123456789"
          },
          {
            "id": 3,
            "fullName" : "Umberto Eco",
            "email": "umberto.eco@goodreads.com",
            "phoneNumber": "580223456789"
          },
          {
            "id": 4,
            "fullName" : "Aleksis Kivi",
            "email": "aleksis.kibi@goodreads.com",
            "phoneNumber": "980103456789"
          },
          {
            "id": 5,
            "fullName" : "Tove Jansson",
            "email": "tove.jansson@goodreads.com",
            "phoneNumber": "880127456789"
          },
          {
            "id": 6,
            "fullName" : "John Bunyan",
            "email": "john.bunyan@pilgrimsprogress.com",
            "phoneNumber": "821234567899"
          },
          {
            "id": 7,
            "fullName" : "Olaf Petrucci",
            "email": "olaf.petrucci@warofworlds.com",
            "phoneNumber": ""
          },
          {
            "id": 8,
            "fullName" : "Bob Dylan",
            "email": "bob.dylan@folkandcountry.net",
            "phoneNumber": "98787234343"
          },
          {
            "id": 9,
            "fullName" : "Johnny Cash",
            "email": "johnny.cash@country.com",
            "phoneNumber": "45787234343"
          },
          {
            "id": 10,
            "fullName" : "Sara Groves",
            "email": "sara.groves@",
            "phoneNumber": "94287234343"
          },
          {
            "id": 11,
            "fullName" : "Rebeeca St James",
            "email": "rebeeca.stjames@ccm.net",
            "phoneNumber": "94287980343"
          },
          {
            "id": 12,
            "fullName" : "Nathan John Feuerstein",
            "email": "nathan.feuerstein@ccm.net",
            "phoneNumber": "94287288843"
          },
          {
            "id": 13,
            "fullName" : "Dan Haseltine",
            "email": "dan.haseltine@alternativerk.net",
            "phoneNumber": "94285554343"
          },
          {
            "id": 14,
            "fullName" : "Stephen Mason",
            "email": "stephen.mason@alternativerock.net",
            "phoneNumber": "94285434343"
          },
          {
            "id": 15,
            "fullName" : "Matthew Odmark",
            "email": "matthew.odmark@alternativerock.net",
            "phoneNumber": "94284434343"
          },
          {
            "id": 16,
            "fullName" : "Charlie Lowell",
            "email": "charlie.lowell@alternativerock.net",
            "phoneNumber": "94285784343"
          },
          {
            "id": 17,
            "fullName" : "Fiyin Alade",
            "email": "fiyin.alade@familylove.net",
            "phoneNumber": "94243284343"
          },
          {
            "id": 18,
            "fullName" : "Abigail Ogunade",
            "email": "abigail.ogunade@familylove.net",
            "phoneNumber": "96705784343"
          },
          {
            "id": 19,
            "fullName" : "Matt Bronleewe",
            "email": "matt.bronleewe@totore.com",
            "phoneNumber": "94283224343"
          },
          {
            "id": 20,
            "fullName" : "Eric Peters",
            "email": "eric.peters@radarradio.net",
            "phoneNumber": "94283000343"
          }
    ];
  }

 
}