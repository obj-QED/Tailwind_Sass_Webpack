import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// style
import '../assets/style/footer.scss';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

// Icon
import Shield from '../assets/icons/Shield.svg';
import SupportOne from '../assets/icons/footer/support__item-1.svg';
import SupportTwo from '../assets/icons/footer/support__item-2.svg';

// Icon Social
import Linkedin from '../assets/icons/footer/linkedin.svg';
import Twitter from '../assets/icons/footer/twitter.svg';
import Youtube from '../assets/icons/footer/youtube.svg';
import Instagram from '../assets/icons/footer/instagram.svg';
import Book from '../assets/icons/footer/book.svg';

export default class Footer extends React.Component {
  render() {
    return (
      /* jshint ignore:start */
      <footer className='footer'>
        <div className='footer__container flex justify-between items-center w-full flex-wrap border-b border-gray-700'>
          <div className='title mb-8 w-full'>
            <p className='w-full md:w-6/12'>
              Make or request payments with a single click from within your ERP,
              connected to your bank account.
            </p>
          </div>
          <div className='footer__container__left w-auto mb-6 md:mb-0'>
            <LazyLoadComponent>
              <div className='support flex items-center'>
                <div className='support__title text-xs leading-4 font-medium uppercase'>
                  Support for:
                </div>
                <div className='support__list flex ml-4'>
                  <div className='support__list__item mr-1'>
                    <a
                      href='https://www.transcard.com/embedded-payments/smart-disburse'
                      target='_blank'
                    >
                      <SupportOne className='grayscale hover:grayscale-none transition-filter duration-300' />
                    </a>
                  </div>
                  <div className='support__list__item'>
                    <SupportTwo className='grayscale hover:grayscale-none transition-filter duration-300' />
                  </div>
                </div>
              </div>
            </LazyLoadComponent>
          </div>
          <div className='footer__container__right w-auto'>
            <LazyLoadComponent>
              <div className='media flex items-center justify-end'>
                <div className='media__title text-xs leading-4 font-medium uppercase'>
                  WE’re social
                </div>
                <div className='media__list ml-6 flex items-center flex-row'>
                  <div className='media__list__item mr-2.5'>
                    <a
                      href='https://www.linkedin.com/company/transcard'
                      target='_blank'
                    >
                      <Linkedin className='grayscale hover:grayscale-none transition-filter duration-300' />
                    </a>
                  </div>
                  <div className='media__list__item mr-2.5'>
                    <a href='https://twitter.com/TransCardLLC' target='_blank'>
                      <Twitter className='grayscale hover:grayscale-none transition-filter duration-300' />
                    </a>
                  </div>
                  <div className='media__list__item mr-2.5'>
                    <a
                      href='https://www.youtube.com/channel/UCPLhZfcmEtv2Pu5ITztSGpw'
                      target='_blank'
                    >
                      <Youtube className='grayscale hover:grayscale-none transition-filter duration-300' />
                    </a>
                  </div>
                  <div className='media__list__item mr-2.5'>
                    <a
                      href='https://www.instagram.com/transcard_/'
                      target='_blank'
                    >
                      <Instagram className='grayscale hover:grayscale-none transition-filter duration-300' />
                    </a>
                  </div>
                  <div className='media__list__item mr-2.5'>
                    <a href='https://blog.transcard.com/' target='_blank'>
                      <Book className='grayscale hover:grayscale-none transition-filter duration-300' />
                    </a>
                  </div>
                </div>
              </div>
            </LazyLoadComponent>
          </div>
        </div>
        <div className='footer__bottom mt-6 md:mt-9 flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap'>
          <div className='copyright'>
            Copyright 2022 Transcard Payments. All Rights Reserved.
          </div>
          <LazyLoadComponent>
            <a
              href='https://www.transcard.com/'
              target='_blank'
              className='powered flex flex-nowrap items-center justify-center md:justify-end w-full mt-4 md:mt-4 md:w-auto'
            >
              <Shield className='mr-1.5' />
              <span>POWERED BY TRANSCARD</span>
            </a>
          </LazyLoadComponent>
        </div>
      </footer>
      /* jshint ignore:end */
    );
  }
}
