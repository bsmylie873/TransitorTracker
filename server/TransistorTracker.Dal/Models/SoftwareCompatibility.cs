﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace TransitorTracker.Dal.Models;

[Table("software_compatibilities")]
public partial class SoftwareCompatibility
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("software_id")]
    public int SoftwareId { get; set; }

    [Column("part_id")]
    public int? PartId { get; set; }

    [Column("device_id")]
    public int? DeviceId { get; set; }

    [Column("software_compatibility_level_id")]
    public int SoftwareCompatibilityLevelId { get; set; }

    [ForeignKey("DeviceId")]
    [InverseProperty("SoftwareCompatibilities")]
    public virtual Device? Device { get; set; }

    [ForeignKey("PartId")]
    [InverseProperty("SoftwareCompatibilities")]
    public virtual Part? Part { get; set; }

    [ForeignKey("SoftwareId")]
    [InverseProperty("SoftwareCompatibilities")]
    public virtual Software Software { get; set; } = null!;

    [ForeignKey("SoftwareCompatibilityLevelId")]
    [InverseProperty("SoftwareCompatibilities")]
    public virtual SoftwareCompatibilityLevel SoftwareCompatibilityLevel { get; set; } = null!;
}
