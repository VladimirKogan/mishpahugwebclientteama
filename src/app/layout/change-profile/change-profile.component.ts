import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.scss']
})
export class ChangeProfileComponent implements OnInit {
  flag = true;
  static = {
      'confession': [
      'religious',
      'irreligious'
    ],
    'gender': [
      'male',
      'female'
    ],
    'maritalStatus': [
      'married',
      'single',
      'couple'
    ],
    'foodPreferences': [
      'vegetarian',
      'kosher',
      'non-vegetarian'
    ],
    'languages': [
      'Hebrew',
      'English',
      'Russian'
    ],
    'holiday': [
      'Pesah',
      'Shabbat',
      'Other'
    ]
  };
  userProfile = { 'firstName': 'Elsa',
    'lastName': 'Fishman',
    'dateOfBirth': '1993-02-20',
    'gender': 'female',
    'maritalStatus': 'couple',
    'confession': 'Jew',
    'pictureLink': [
      'https://i.pinimg.com/originals/23/bf/25/23bf251cab0b742f9257506357e70f38.png',
      'https://www.planwallpaper.com/static/images/Blue-Green-beautiful-nature-21891805-1920-1200_jX7pvvz.jpg'
    ],
    'phoneNumber': '0503453183',
    'foodPreferences': [
      'kosher',
    ],
    'languages': [
      'Hebrew',
      'English'
    ],
    'description': 'I like to arrange home parties and to meet new interesting people.',
    'rate': 4
  };
  a = false;
  constructor() { }

  ngOnInit() {
    console.log((this.userProfile)['confession']);

  }

  changeProfileBtn() {
    console.log('changeProfileBtn!!');
    this.a = true;
    // document.getElementById('inputFirstName').setAttribute('disabled', 'false');inputMaritalStatus


    document.getElementById('inputFirstName').removeAttribute('disabled');
    document.getElementById('inputConfession').removeAttribute('disabled');
    document.getElementById('inputGender').removeAttribute('disabled');
    document.getElementById('inputLanguage').removeAttribute('disabled');
    document.getElementById('inputFoodPreferences').removeAttribute('disabled');
    document.getElementById('inputMaritalStatus').removeAttribute('disabled');
    document.getElementById('inputLastName').removeAttribute('disabled');
    document.getElementById('inputPhoneNumber').removeAttribute('disabled');
    document.getElementById('inputAllergy').removeAttribute('disabled');
    document.getElementById('changeBtn').setAttribute('disabled', 'true');
  }
  saveChangesBtn() {
    console.log('saveChangesBtn!!');
    /*document.getElementById('inputConfession').removeAttribute('disabled');
    document.getElementById('inputGender').removeAttribute('disabled');
    document.getElementById('inputLanguage').removeAttribute('disabled');
    document.getElementById('inputFoodPreferences').removeAttribute('disabled');
    document.getElementById('inputMaritalStatus').removeAttribute('disabled');
    document.getElementById('inputLastName').removeAttribute('disabled');
    document.getElementById('inputPhoneNumber').removeAttribute('disabled');*/
  }
  changeUserProfilePictureBtn() {
    console.log('changeUserProfilePictureBtn!!');
  }

}
