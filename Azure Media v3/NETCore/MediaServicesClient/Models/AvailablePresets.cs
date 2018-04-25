// <auto-generated>
// Copyright (c) Microsoft Corporation. All rights reserved.
// </auto-generated>

namespace Microsoft.Media.Encoding.Rest.ArmClient.Models
{
    using Newtonsoft.Json;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// The response message for available presets.
    /// </summary>
    public partial class AvailablePresets
    {
        /// <summary>
        /// Initializes a new instance of the AvailablePresets class.
        /// </summary>
        public AvailablePresets()
        {
            CustomInit();
        }

        /// <summary>
        /// Initializes a new instance of the AvailablePresets class.
        /// </summary>
        /// <param name="presets">Lists the available presets</param>
        public AvailablePresets(IList<string> presets = default(IList<string>))
        {
            Presets = presets;
            CustomInit();
        }

        /// <summary>
        /// An initialization method that performs custom operations like setting defaults
        /// </summary>
        partial void CustomInit();

        /// <summary>
        /// Gets or sets lists the available presets
        /// </summary>
        [JsonProperty(PropertyName = "presets")]
        public IList<string> Presets { get; set; }

    }
}