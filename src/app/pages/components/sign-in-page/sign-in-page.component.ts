import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/core/services/loading.service';
import { RoutingService } from 'src/app/core/services/routing.service';
import { TitleI18Service } from 'src/app/shared/services/title-i18.service';

import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { UrlConst } from '../../constants/url-const';
import { SignInRequestDto } from '../../models/dtos/requests/sign-in-request-dto';
import { SignInResponseDto } from '../../models/dtos/responses/sign-in-response-dto';
import { User } from '../../models/user';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit, AfterViewChecked {
  signInUserAccount = new FormControl<string>('', [Validators.required]);
  signInUserPassword = new FormControl<string>('', [Validators.required]);

  signInForm = this.formBuilder.group({
    signInUserAccount: this.signInUserAccount,
    signInUserPassword: this.signInUserPassword,
  });

  constructor(
    public transLateService: TranslateService,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private routingService: RoutingService,
    private loadingService: LoadingService,
    private titleI18Service: TitleI18Service
  ) {}

  ngOnInit(): void {
    this.setupLanguage();
  }

  ngAfterViewChecked(): void {
    this.titleI18Service.setTitle(UrlConst.PATH_SIGN_IN);
  }

  clickSignInButton() {
    const signInRequestDto = this.createSignInRequestDto();

    this.signIn(signInRequestDto);
  }

  private setupLanguage() {
    this.transLateService.setDefaultLang(this.getLanguage(navigator.language));
    this.transLateService.use(this.getLanguage(navigator.language));
  }

  private getLanguage(language: string): string {
    console.log('SignInPageComponent #getLanguage language' + language);

    const CAHR_HYPHEN = '-';
    if (language.indexOf(CAHR_HYPHEN) > 0) {
      const splittedLanguage: string[] = language.split(CAHR_HYPHEN);
      console.log(
        'SignInPageComponent #getLanguage splittedLanguage[0]' +
          splittedLanguage[0]
      );

      return splittedLanguage[0];
    }
    return language;
  }

  private signIn(signInRequestDto: SignInRequestDto) {
    this.loadingService.startLoading();
    const signInResponseDto: Observable<SignInResponseDto> =
      this.accountService.signIn(signInRequestDto);
    signInResponseDto.subscribe((responseDto) => {
      if (responseDto != null) {
        this.setUpUserAccount(responseDto);
        this.routingService.navigate(UrlConst.PATH_PRODUCT_LISTING);
      }
      this.loadingService.stopLoading();
    });
  }

  private createSignInRequestDto(): SignInRequestDto {
    return {
      Username: this.signInUserAccount.value,
      Password: this.signInUserPassword.value,
    };
  }

  private setUpUserAccount(responseDto: SignInResponseDto) {
    const user: User = new User();
    user.userAccount = responseDto.userAccount;
    user.userName = responseDto.userName;
    user.userLocale = responseDto.userLocale;
    user.userLanguage = responseDto.userLanguage;
    user.userTimezone = responseDto.userTimezone;
    user.userTimezoneOffset = responseDto.userTimezoneOffset;
    user.userCurrency = responseDto.userCurrency;
    this.accountService.setUser(user);
  }
}
