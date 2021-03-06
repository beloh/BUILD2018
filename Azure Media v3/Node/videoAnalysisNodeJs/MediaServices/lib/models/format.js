/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

/**
 * Base class for output.
 *
 */
class Format {
  /**
   * Create a Format.
   * @member {string} [filenamePattern] Describes the pattern of the file names
   * for the generated output files. The following macros are supported in the
   * file name: {Basename} - The base name of the input video {Extension} - The
   * appropriate extension for this format. {Label} - The label assigned to the
   * codec/layer. {Index} - A unique index for thumbnails. Only applicable to
   * thumbnails. {Bitrate} - The audio/video bitrate. Not applicable to
   * thumbnails. {Codec} - The type of the audio/video codec. Any unsubstituted
   * macros will be collapsed and removed from the filename.
   * @member {string} odatatype Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Format
   *
   * @returns {object} metadata of Format
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Format',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '@odata.type',
          clientName: 'odatatype'
        },
        uberParent: 'Format',
        className: 'Format',
        modelProperties: {
          filenamePattern: {
            required: false,
            serializedName: 'filenamePattern',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Format;
