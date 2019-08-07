import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'likeDislikeButton';
  counter: {
    like: {
      count: number;
      selected: boolean;
    };
    dislike: {
      count: number;
      selected: boolean;
    };
  } = {
    like: {
      count: 99,
      selected: false
    },
    dislike: {
      count: 99,
      selected: false
    }
  };

  constructor() {}

  clickHandler(likeOrDislike) {
    switch (likeOrDislike) {
      case 'like':
        this.likeClicked(this.counter);
        break;
      case 'dislike':
        this.dislikeClicked(this.counter);
        break;
      default:
        console.log('error');
    }
  }

  likeClicked(counter: {
    like: {
      count: number;
      selected: boolean;
    };
    dislike: {
      count: number;
      selected: boolean;
    };
  }) {
    if (counter.like.selected === true) {
      counter.like.count--;
      counter.like.selected = false;
    } else {
      counter.like.count++;
      counter.like.selected = true;
      if (counter.dislike.selected === true) {
        counter.dislike.count--;
        counter.dislike.selected = false;
      }
    }
  }
  dislikeClicked(counter: {
    like: {
      count: number;
      selected: boolean;
    };
    dislike: {
      count: number;
      selected: boolean;
    };
  }) {
    if (counter.dislike.selected === true) {
      counter.dislike.count--;
      counter.dislike.selected = false;
    } else {
      counter.dislike.count++;
      counter.dislike.selected = true;
      if (counter.like.selected === true) {
        counter.like.count--;
        counter.like.selected = false;
      }
    }
  }
}
