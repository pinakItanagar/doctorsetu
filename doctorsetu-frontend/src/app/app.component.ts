
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { MessagingService } from './api/messaging.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'push-notification';
  message;
  constructor(private messagingService: MessagingService,private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    // this.messagingService.requestPermission()
    // this.messagingService.receiveMessage()
    // this.message = this.messagingService.currentMessage
  
  }
}
